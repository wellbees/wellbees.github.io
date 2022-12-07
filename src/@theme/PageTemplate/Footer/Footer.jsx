import { COMPANYNAME } from 'app/main/PublicPages/HomePage/store/actions';
import { memo } from 'react';
import { FaGithub, FaMediumM, FaNpm } from 'react-icons/fa';

const Footer = () => {
	return (
		<div className="bg-secondary shadow-md">
			<div className="container mx-auto px-4 pt-8 pb-3">
				<div className="w-full flex flex-row flex-wrap justify-between">
					<div className="flex flex-row items-center">
						<img
							src="/assets/images/logo-light.png"
							alt="Wellbees Tech"
							className="w-full max-w-[120px] sm:max-w-[140px]"
						/>
					</div>
					<div className="flex flex-row items-center">
						<a
							target="_blank"
							rel="noreferrer"
							href="https://www.npmjs.com/org/wellbees?activeTab=packages"
							className="ml-3 block"
						>
							<div className="transition-all duration-300 text-white hover:text-primary">
								<FaNpm className="text-sm sm:text-lg" />
							</div>
						</a>

						<a target="_blank" rel="noreferrer" href="https://github.com/wellbees" className="ml-3 block">
							<div className="transition-all duration-300 text-white hover:text-primary">
								<FaGithub className="text-sm sm:text-lg" />
							</div>
						</a>

						<a target="_blank" rel="noreferrer" href="https://medium.com/wellbees" className="ml-3 block">
							<div className="transition-all duration-300 text-white hover:text-primary">
								<FaMediumM className="text-sm sm:text-lg" />
							</div>
						</a>
					</div>
				</div>
				<div className="h-[1px] w-full bg-slate-50 mt-4 mb-2" />
				<div className="text-sm text-white text-center">
					{`© ${new Date().getFullYear()} | `}
					<a
						className="transition-colors duration-300 text-white hover:text-primary"
						href="https://wellbees.co"
						target="_blank"
						rel="noreferrer"
					>
						{COMPANYNAME}
					</a>
				</div>
			</div>
		</div>
	);
};

export default memo(Footer);
