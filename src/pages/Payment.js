import React, {
    useContext,
    useEffect,
    useState
  } from 'react';
  import PageTitle from '../components/common/PageTitle';
  import { FetchContext } from '../context/FetchContext';
  import Card from '../components/common/Card';
  import defaultAvatar from './../images/power.png';
  import {Button} from '@material-ui/core'


  
  const PaymentDetailLabel = ({ info }) => (
    <p className="mt-2 uppercase font-bold text-gray-500 text-xs">
      {`Due Date: ${info.DueDate}`}
      <br/>
      {`CustomerID: ${info.CustomerID}`}
    </p>
  );
  const PaymentDetail = ({ paymentdetails }) => (
    <Card>
      <div className="flex">
        <div className="w-24">
          <img
            src={defaultAvatar}
            alt="avatar"
          />
        </div>
  
        <div>
          <p className="font-bold text-lg">
            {`Month: ${paymentdetails.month}`} {" "}
            <br/>
            {`Cost Incurred: ${paymentdetails.CostIncurred}`}
           
          </p>
  
          <div className="mt-2">
            <PaymentDetailLabel info={paymentdetails} />
            <br/>
            <Button variant="contained" color="primary">
                Pay
            </Button>

          </div>
        </div>
      </div>
    </Card>
  );
  
  const Payment = () => {
     const fetchContext = useContext(FetchContext);
    const [paymentdetails, setPaymentDetails] = useState([]);
  
    useEffect(() => {
      const getDetails = async () => {
        try {
          const { data } = await fetchContext.authAxios.get(
            'paymentdata'
          );
          setPaymentDetails(data.payment);
        } catch (err) {
          console.log(err);
        }
      };
      getDetails();
    }, [fetchContext]);
  
    return (
      <>
        <PageTitle title="Payment" />
        <div className="flex flex-col">
          {/* {!!users.length && */}
            {/* users.map(user => ( */}
              <div className="m-2" >
                <PaymentDetail paymentdetails={paymentdetails} />
              </div>
              
            {/* ))} */}
        </div>
      </>
    );
  };
  
  export default Payment;
  