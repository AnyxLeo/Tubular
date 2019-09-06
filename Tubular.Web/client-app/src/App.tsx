import * as React from 'react';
import { DataGrid, ToolbarOptions } from 'tubular-react';
import { ColumnsDefinition } from './ColumnsDefinition';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlank from '@material-ui/icons/CheckBoxOutlineBlank';

const onClick = () => alert('Hello Tubular');

const customToolBar = new ToolbarOptions({
    advancePagination: false,
    exportButton: false,
    printButton: false,
    rowsPerPageOptions: [1, 3, 5, 7, 9],
    customItems: (<button onClick={onClick}> Click Me </button>)
});

const App: React.FunctionComponent = () => {


    const customBody = (row: any) =>
        (<TableRow key={row.OrderId}>
            <TableCell>{row.CustomerName}</TableCell>
            <TableCell>{row.ShippedDate}</TableCell>
            <TableCell>{row.ShipperCity}</TableCell>
            <TableCell>{row.IsShipped ? <Checkbox />: <CheckBoxOutlineBlank />}</TableCell>
            <TableCell>{row.Amount}</TableCell>
        </TableRow>)

    return (
        <>
            <h2>Tubular</h2>
            <DataGrid
                gridName='Orders'
                toolbarOptions={customToolBar}
                columns={ColumnsDefinition}
                dataSource={'http://localhost:51244/api/tubular/paged'}
                bodyRenderer={customBody}
            />
        </>
    );
};

export default App;
