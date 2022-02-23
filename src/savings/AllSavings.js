import React, { useState, useEffect} from 'react';
import MaterialTable from 'material-table';
import useFetch from '../main/useFetch';

const AllSavings = () =>{
    // const [data, setData] = useState();
    // const [isPending, setIsPending] = useState(true);
    // const [error, setError] = useState(null);

    const{data, isPending, error} = useFetch('/main/allsavings');


    const columns=[
        {title: 'id', field:'id'},
        {title: 'account_number', field:'account_number'},
        {title: 'first_name', field:'first_name'},
        {title: 'other_name', field:'other_names'},
        {title: 'phone_no', field:'phone_no'},
        {title: 'Amount', field:'amount'},
        {title: 'save_date', field:'save_date'},
        
    ]
    return(

        <div>
            {error && <div> {error} </div>}
            {isPending && <div>Loading...</div>}

            {data && <MaterialTable title="Roral Focus - All savings"
                data={data}
                columns={columns}
                options={{
                    search: true,
                    paging: true,
                    filtering: true,
                    exportButton: true,
                    sorting: true,
                }}
            />}
        </div>

    )

}
export default AllSavings;