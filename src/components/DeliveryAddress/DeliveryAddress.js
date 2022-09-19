import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserAddress } from "../../service/VintageSoulService";
import FormAddress from "./FormAddress";
import UserAddress from "./UserAddress";


export default function DeliveryAddress() {
	const [refreshAddress, setRefreshAddress] = useState(false);
	const [address, setAddress] = useState({});
	const navigate = useNavigate();
    
	useEffect(() => {
		getUserAddress()
			.catch((res) => {
				alert(res.message)
			})
			.then((res) => {
				console.log(res.data)
				setAddress(res.data)
			})
	}, [refreshAddress, setAddress]);

	return (
		<>
			{address ? 
			<UserAddress
				address={address}
			/> 
			: 
			<FormAddress
				refreshAddress={refreshAddress}
				setRefreshAddress={setRefreshAddress}
			/>}
		</>
	);

	
}

