export type User = {
	accountBalance: string;
	accountNumber: string;
	createdAt: string;
	education: {
		duration: string;
		employmentStatus: string;
		level: string;
		loanRepayment: string;
		monthlyIncome: string[];
		officeEmail: string;
		sector: string;
	};
	email: string;
	guarantor: {
		firstName: string;
		lastName: string;
		phoneNumber: string;
		gender: string;
		address: string;
	};
	id: string;
	lastActiveDate: string;
	orgName: string;
	phoneNumber: string;
	profile: {
		firstName: string;
		lastName: string;
		phoneNumber: string;
		avatar: string;
		gender: string;
		bvn: string;
		address: string;
		currency: string;
	};
	socials: {
		facebook: string;
		instagram: string;
		twitter: string;
		userName: string;
	};
	userName: string;
};

export type Users = {
	users: User[];
};