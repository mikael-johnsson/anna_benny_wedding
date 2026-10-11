import { Info } from "@/app/models/Info";
type InfoCardProps = {
	info: Info;
};

const InfoCard = ({ info }: InfoCardProps) => {
	return (
		<div className="border border-text-primary p-4 w-80">
			<div className="flex items-center justify-between">
				<span>Namn: </span>
				<span>{info.name}</span>
			</div>
			<div className="flex items-center justify-between">
				<span>Plus 1: </span>
				<span>{info.plusOne}</span>
			</div>
			<div className="flex items-center justify-between">
				<span>Telefon: </span>
				<span>{info.phone}</span>
			</div>
			<div className="flex items-center justify-between">
				<span>Email: </span>
				<span>{info.email}</span>
			</div>
			<div className="flex items-center justify-between">
				<span>Fredagsmiddag: </span>
				<span>{info.fridayDinner}</span>
			</div>
			<div className="flex items-center justify-between">
				<span>Allergier: </span>
				<span>{info.allergies}</span>
			</div>
			<div className="flex items-center justify-between">
				<span>Buss till vigsel: </span>
				<span>{info.transport}</span>
			</div>
		</div>
	);
};

export default InfoCard;
