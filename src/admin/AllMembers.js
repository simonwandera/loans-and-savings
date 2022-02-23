import React, { useState, useEffect} from 'react';
import MaterialTable from 'material-table';
import useFetch from '../main/useFetch';

const AllMembers = () =>{
    // const [data, setData] = useState();
    // const [isPending, setIsPending] = useState(true);
    // const [error, setError] = useState(null);

    const{data, isPending, error} = useFetch('/main/allmembers');

    const columns=[
        {title: 'id', field:'id'},
        {title: 'first_name', field:('first_name')},
        {title: 'other_name', field:'other_name'},
        {title: 'ID_number', field:'ID_number'},
        {title: 'phone_no', field:'phone_no'},
        {title: 'KRA_pin', field:'KRA_pin'},
        {title: 'occupation', field:'occupation'},
        {title: 'Bank_name', field:'Bank_name'},    
        {title: 'Bank_account', field:'Bank_account'},
        {title: 'constituency_name', field:'constituency_name'},
        {title: 'county_name', field:'county_name'}
    ]
    return(

        <div>
            {error && <div> {error} </div>}
            {isPending && <div>Loading...</div>}

            {data && <MaterialTable title="Roral Focus - All members"
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
export default AllMembers;