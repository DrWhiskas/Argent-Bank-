import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BankCard from "../components/BankCard";

export default function UserAccount(){
    return (
			<>
				<Header />
				<div className="main bg-dark">
					<BankCard />
					<BankCard />
					<BankCard />
					<BankCard />
					<BankCard />
					<BankCard />
					<BankCard />
					<BankCard />
					<BankCard />
				</div>
				<Footer />
			</>
		);
}