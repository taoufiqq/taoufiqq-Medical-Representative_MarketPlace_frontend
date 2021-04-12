import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import toastr from 'toastr';
import "toastr/build/toastr.css";

const ValidateAccount = () => {

    const history = useHistory();

    const {token} = useParams();

    useEffect(()=>{

        axios.put(`https://marketplace-elhanchaoui-api.herokuapp.com/Customer/activateCompte/${token}`)
		.then(res => {

          history.push('/loginCustomer');
          toastr.success('Your Account Activated!')

        }).catch(function (err) {
          console.log(err);
      });

      },[history,token])

    return ( 
        <div>
        </div>
     );
}
 
export default ValidateAccount;