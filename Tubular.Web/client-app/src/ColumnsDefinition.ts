
import { AggregateFunctions, ColumnDataType, ColumnModel, ColumnSortDirection } from 'tubular-common';

export const ColumnsDefinition = [
  new ColumnModel('OrderID',
    {
      IsKey: true,
      Visible: false,
    }),
  new ColumnModel('CustomerName',
    {
      Aggregate: AggregateFunctions.COUNT,
      Filterable: true,
      Searchable: true,
      Sortable: true,
    }),
  new ColumnModel('ShippedDate',
    {
      DataType: ColumnDataType.DATE_TIME,
      Filterable: false,
      SortDirection: ColumnSortDirection.ASCENDING,
      Sortable: true,
    }),
  new ColumnModel('ShipperCity',
    {
      Filterable: true,
      Searchable: true,
    }),
  new ColumnModel('IsShipped',
    {
      DataType: ColumnDataType.BOOLEAN,
      Filterable: true,
      Searchable: false,
    }),
  new ColumnModel('Amount',
    {
      Filterable: true,
      Label: 'Price',
      Sortable: true,
    }),
];
