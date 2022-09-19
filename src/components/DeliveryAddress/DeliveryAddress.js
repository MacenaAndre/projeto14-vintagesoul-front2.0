import { useEffect, useState } from "react";
import { getUserAddress } from "../../service/VintageSoulService";
import FormAddress from "./FormAddress";
import UserAddress from "./UserAddress";


export default function DeliveryAddress() {
	const [refreshAddress, setRefreshAddress] = useState(false);
	const [address, setAddress] = useState({});
	const [bolean, setBolean] = useState(true);
	const [state, setState] = useState("");
	const [city, setCity] = useState("");
	const [district, setDistrict] = useState("");
	const [street, setStreet] = useState("");
    const [number, setNumber] = useState("");
    const [complement, setComplement] = useState("");
    
	useEffect(() => {
		getUserAddress()
			.catch((res) => {
				alert(res.message)
			})
			.then((res) => {
				console.log(res.data)
				setAddress(res.data)
				setState(res.data.state)
				setCity(res.data.city)
				setDistrict(res.data.district)
				setStreet(res.data.street)
				setNumber(res.data.number)
				setComplement(res.data.complement)
			})
	}, [refreshAddress, setAddress]);

	if(bolean) {
		return (
			<>
				{address ? 
				<UserAddress
					address={address}
					setBolean={setBolean}	
				/> 
				: 
				<FormAddress
					refreshAddress={refreshAddress}
					setRefreshAddress={setRefreshAddress}
					setBolean={setBolean}
					state={state}
					setState={setState}
					city={city}
					setCity={setCity}
					district={district}
					setDistrict={setDistrict}
					street={street}
					setStreet={setStreet}
					number={number}
					setNumber={setNumber}
					complement={complement}
					setComplement={setComplement}
				/>}
			</>
		);
	}

	return (
		<>
			<FormAddress
				refreshAddress={refreshAddress}
				setRefreshAddress={setRefreshAddress}
				setBolean={setBolean}
				state={state}
				setState={setState}
				city={city}
				setCity={setCity}
				district={district}
				setDistrict={setDistrict}
				street={street}
				setStreet={setStreet}
				number={number}
				setNumber={setNumber}
				complement={complement}
				setComplement={setComplement}
			/>
		</>
	);


}

