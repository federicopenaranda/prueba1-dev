# import the wb module
from wb import *
# import the grt module
import grt

def underscore_to_camelcase(value):
    output = ""
    first_word_passed = False
    for word in value.split("_"):
        output += word.capitalize()
    return output

def create_entity_field(name, type, len, nullable, unique, autoIncrement):
    nullableField = 'false' if nullable == 1 else 'true'
    if type == 'VARCHAR':
        return "\t@Column( { type: 'varchar', length: %s , nullable: %s} ) \n\t%s: string;\n" % (str(len), nullableField, name)
    elif type == 'INT':
        if autoIncrement == 1:
            return "\t@PrimaryGeneratedColumn() \n\t%s: number;\n" % (name)
        elif autoIncrement == 0:
            return "\t@Column( { type: 'int', nullable: %s} ) \n\t%s: number;\n" % (nullableField, name)
    elif type == 'TEXT':
        return "\t@Column( { type: 'text', nullable: %s} ) \n\t%s: number;\n" % (nullableField, name)
    elif type == 'DATETIME':
        return "\t@Column( { type: 'timestamptz', nullable: %s} ) \n\t%s: Date;\n" % (nullableField, name)
    elif type == 'DATE':
        return "\t@Column( { type: 'date', nullable: %s} ) \n\t%s: Date;\n" % (nullableField, name)
    elif type == 'TINYINT(1)':
        return "\t@Column( { type: 'boolean', nullable: %s} ) \n\t%s: boolean;\n" % (nullableField, name)
    else:
        print ("Unkown data type: " + type)
        return ''

def create_entity_file(table):
    f = open("C:\\Users\\fede\\NestJSModels\\" + table.name + ".entity.ts", "w")
    content = "import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';\n\n"
    content += f"@Entity('{table.name}')"
    content += f"\nexport class {underscore_to_camelcase(table.name)}" + " {\n"
    for column in table.columns:
        columnType = ''
        if not column.simpleType:
            columnType = column.formattedType
        else:
            columnType = column.simpleType.name
        if column is not None:
            content += create_entity_field(column.name, columnType, column.length, column.isNotNull, 1, column.autoIncrement) + "\n"
    content += "}"
    f.write(content)
    f.close()

# schema = grt.root.wb.doc.physicalModels[0].catalog.schemata[0]
# schema = grt.root.wb.doc.physicalModels[0].diagrams[0].figures[0].table
# print(grt.root.wb.doc.physicalModels[0].diagrams[0].figures)

## Get relationships from diagram
#connections = grt.root.wb.doc.physicalModels[0].diagrams[0].connections
#for connection in connections:
#    print(connection)

figures = grt.root.wb.doc.physicalModels[0].diagrams[0].figures

for figure in figures:
     create_entity_file(figure.table)
