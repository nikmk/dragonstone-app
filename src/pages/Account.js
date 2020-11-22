import React, { useContext } from 'react';
import PageTitle from '../components/common/PageTitle';
import Card from '../components/common/Card';

import { AuthContext } from '../context/AuthContext';

const Account = () => {

  const auth = useContext(AuthContext);
  


  return (
    <>
      <PageTitle title="Account" />
      <Card>
        <p className="font-bold">User Details</p>
        <div className="mt-4">
          <p>Name:</p>
          <div className="mt-2 flex">
           {`${auth.authState.userInfo.firstName} ${auth.authState.userInfo.lastName}`}
          </div>
          <br/>
          <p>Email:</p>
          <div className="mt-2 flex">
          {`${auth.authState.userInfo.email}`}
          </div>
          <br/>
          <p>Location:</p>
          <div className="mt-2 flex">
            Manipal
          </div>
        </div>
      </Card>
    </>
  );
};

export default Account;
