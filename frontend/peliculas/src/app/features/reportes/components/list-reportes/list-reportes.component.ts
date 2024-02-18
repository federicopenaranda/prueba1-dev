import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { Subscription, tap, merge } from 'rxjs';
import { LoginService } from 'src/app/features/admin/services/login.service';
import { Reporte } from 'src/app/shared/models/reporte.model';
import { ReportesService } from '../../services/reportes.service';
import { ListReportesDataSource } from './list-reportes-datasource';
import { LoaderService } from '../../../../core/services/loader.service';

@Component({
    selector: 'app-list-reportes',
    templateUrl: './list-reportes.component.html',
    styleUrls: ['./list-reportes.component.css']
})
export class ListReportesComponent implements OnInit, OnDestroy, AfterViewInit {
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
    @ViewChild(MatTable) table!: MatTable<Reporte>;
    dataSource: any;

    /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
    displayedColumns = [
        // 'select',
        'codigo_reporte',
        'nombre_reporte',
        'descripcion_reporte',
        'actions',
    ];

    private subscriptions: Subscription[] = [];

    constructor(
        private loaderService: LoaderService,
        private reportesService: ReportesService,
        private loginService: LoginService,
        public router: Router
    ) { }

    ngOnInit(): void {
        this.loaderService.setMessage('Cargando listado de reportes');
        this.dataSource = new ListReportesDataSource(this.reportesService);
        this.dataSource.loadTable('', 'asc', 'id_reporte', 0, 10);
    }

    isLogged(): boolean {
        return this.loginService.isLogged();
    }


    ngAfterViewInit(): void {
        this.dataSource!.sort = this.sort;
        this.dataSource!.paginator = this.paginator;
        this.table.dataSource = this.dataSource;

        // reset the paginator after sorting
        this.sort.sortChange.subscribe((data: any) => (this.paginator.pageIndex = 0));

        merge(this.sort.sortChange, this.paginator.page)
            .pipe(tap(() => this.loadReportesTable()))
            .subscribe();
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach((subscription) => {
            subscription.unsubscribe();
        });
    }

    loadReportesTable(): void {
        this.dataSource.loadTable(
            '',
            this.sort.direction,
            this.sort.active,
            this.paginator.pageIndex,
            this.paginator.pageSize,
        );
    }

}
