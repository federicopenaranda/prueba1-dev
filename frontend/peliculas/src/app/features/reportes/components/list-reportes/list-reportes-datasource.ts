import { DataSource, SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { catchError, finalize } from 'rxjs/operators';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { Reporte } from 'src/app/shared/models/reporte.model';
import { ReportesService } from '../../services/reportes.service';


/**
 * Data source for the ListProceso view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class ListReportesDataSource extends DataSource<Reporte> {
    private itemSubject = new BehaviorSubject<Reporte[]>([]);
	private loadingSubject = new BehaviorSubject<boolean>(false);
    
    data: Reporte[] = [];
    paginator: MatPaginator | undefined;
    sort: MatSort | undefined;
    filter = '';
	totalCount = 0;
	selection = new SelectionModel<Reporte>(true, []);

	isAllSelected(): boolean {
		const numSelected = this.selection.selected.length;
		const numRows = this.data.length;
		return numSelected === numRows;
	}

	/** Selects all rows if they are not all selected; otherwise clear selection. */
	masterToggle(): void {
		this.isAllSelected() ? this.selection.clear() : this.data.forEach((row) => this.selection.select(row));
	}

	/** The label for the checkbox on the passed row */
	checkboxLabel(row?: Reporte): string {
		if (!row) {
			return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
		}
		return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id_reporte + 1}`;
	}

	applyFilter(event: Event): void {
		const filterValue = (event.target as HTMLInputElement).value;
		this.filter = filterValue.trim().toLowerCase();
	}

	loadTable(filter: string, sort: string, sortColumn: string, pageNumber: number, pageSize: number): void {
		this.loadingSubject.next(true);
		this.service
			.getReportes(filter, sort, sortColumn, pageNumber, pageSize)
			.pipe(
				catchError(() => of([])),
				finalize(() => this.loadingSubject.next(false))
			)
			.subscribe((item: any) => {
				if ( item.data && item.data.length > 0 ) {
					this.data = item.data;
					this.totalCount = item.totalCount;
					this.itemSubject.next(item.data);
				}
			});
	}

    // eslint-disable-next-line no-unused-vars
    constructor(private service: ReportesService) {
        super();
    }

    /**
     * Connect this data source to the table. The table will only update when
     * the returned stream emits new items.
     * @returns A stream of the items to be rendered.
     */
    connect(): Observable<Reporte[]> {
        return this.itemSubject.asObservable();
    }

    /**
     *  Called when the table is being destroyed. Use this function, to clean up
     * any open connections or free any held resources that were set up during connect.
     */
    disconnect(): void { }

}