import React, { useState, useEffect} from 'react';
import MaterialTable from 'material-table';
import useFetch from '../main/useFetch';

const LoanStatement = () =>{
    // const [data, setData] = useState();
    // const [isPending, setIsPending] = useState(true);
    // const [error, setError] = useState(null);

    const{data, isPending, error} = useFetch('/main/monthlysavings');

    const columns=[
        {title: 'month', field:'month'},
        {title: 'TOTAL', field:'TOTAL'}
        
    ]
    return(

        <div>
            {error && <div> {error} </div>}
            {isPending && <div>Loading...</div>}

            {data && <MaterialTable title="Royal Focus - Loans Statement"
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
export default LoanStatement;