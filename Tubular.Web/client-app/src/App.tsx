import * as React from 'react';
import {DataGrid, ToolbarOptions } from 'tubular-react';
import {formatDate} from 'tubular-common';
import { columnsDefinition } from './ColumnsDefinition';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CheckBox from '@material-ui/icons/Checkbox';
import CheckBoxOutlineBlank from '@material-ui/icons/CheckBoxOutlineBlank';

const App: React.FunctionComponent = () => {
    const customToolBar = new ToolbarOptions(
        {
            advancePagination: false,
            exportButton: false,
            printButton: false,
            topPager: false,
            itemsPerPage: 15,
            rowsPerPageOptions: [15, 25, 55],
        }
    );

    const customBody = (row: any) => {
        return (
            <TableRow key={row.OrderID}>
                <TableCell>{row.OrderID}</TableCell>
                <TableCell>{row.CustomerName}</TableCell>
                <TableCell>
                {formatDate(row.ShippedDate, 'MMMM do yyyy, h:mm:ss a')}
                </TableCell>
                <TableCell>{row.ShipperCity.toUpperCase()}</TableCell>
                <TableCell>{row.Amount || 0}</TableCell>
                <TableCell>{row.IsShipped? <CheckBox /> : <CheckBoxOutlineBlank />}</TableCell>
            </TableRow>
        );
    }; 

    const customFooterRender = (aggregatePayload: any) => {
        return (
            <React.Fragment>
                {aggregatePayload &&
                    Object.keys(aggregatePayload).map(aggregateName => (
                        <TableRow>
                            <TableCell>Total {aggregateName}:</TableCell>
                            <TableCell>{aggregatePayload[aggregateName]}</TableCell>
                            <TableCell />
                            <TableCell />
                            <TableCell />
                            <TableCell />
                        </TableRow>
                    ))
                }
            </React.Fragment>
        );
    };
    return (
        <>
            <h2>Tubular</h2>
            <DataGrid 
                gridName={'Tubular'}
                dataSource={'http://localhost:51244/api/tubular/paged'}
                columns={columnsDefinition}
                toolbarOptions={customToolBar}
                bodyRenderer={customBody}
                footerRenderer={customFooterRender}
            />
        </>
    );
};

export default App;
