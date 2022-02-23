import React, { useState, useEffect} from 'react';
import MaterialTable from 'material-table';
import useFetch from '../main/useFetch';

const SavingsAccounts = () =>{
    // const [data, setData] = useState();
    // const [isPending, setIsPending] = useState(true);
    // const [error, setError] = useState(null);

    const{data, isPending, error} = useFetch('/main/savingsaccounts');

    const columns=[
        {title: 'id', field:'id'},
        {title: 'account_number', field:'account_number'},
        {title: 'ID_number', field:'ID_number'},
        {title: 'first_name', field:'first_name'},
        {title: 'other_name', field:'other_name'},
        {title: 'phone_no', field:'phone_no'},
        {title: 'commitment_amount', field:'commitment_amount'},
        {title: 'frequency', field:'frequency'},    
        {title: 'occupation', field:'occupation'},
        {title: 'start_date', field:'start_date'},
        {title: 'period', field:'period'},
        {title: 'tag', field:'tag'}
    ]
    return(

        <div>
            {error && <div> {error} </div>}
            {isPending && <div>Loading...</div>}

            {data && <MaterialTable title="Roral Focus - Savings Accounts"
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
export default SavingsAccounts;