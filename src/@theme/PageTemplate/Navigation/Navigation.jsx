// import { allLanguages } from 'app/languages';
// import { setLanguage } from 'app/store/generalSettingsSlice';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaMediumM, FaNpm } from 'react-icons/fa';
// import { useDispatch, useSelector } from 'react-redux';

const Navigation = () => {
	const { t } = useTranslation('translation');
	// const dispatch = useDispatch();
	// const currentSlug = useSelector(({ generalSettings }) => generalSettings.language);

	return (
		<div className="bg-white shadow-md fixed inset-0 bottom-auto">
			<div className="container mx-auto px-4 py-1">
				<div className="w-full flex flex-row flex-wrap justify-between">
					<div className="flex flex-row items-center">
						<img
							src="/assets/images/logo.png"
							alt="Wellbees Tech"
							className="w-full max-w-[120px] sm:max-w-[140px]"
						/>
					</div>
					<div className="flex flex-row items-center">
						{/* {allLanguages.map((item, key) => {
							if (item.slug === currentSlug) return null;

							return (
								<div className="ml-2 block" key={key}>
									<div
										className="p-1 transition-all duration-300 rounded-full shadow-md border border-solid text-secondary hover:text-primary border-secondary hover:border-primary cursor-pointer w-[28px] h-[28px] flex items-center justify-center"
										onClick={() => dispatch(setLanguage(item.slug))}
									>
										<div className="text-[12px] uppercase">{item.slug}</div>
									</div>
								</div>
							);
						})} */}

						<a
							target="_blank"
							rel="noreferrer"
							href="https://www.npmjs.com/org/wellbees?activeTab=packages"
							className="ml-2 block"
						>
							<div className="p-1 transition-all duration-300 rounded-full shadow-md border border-solid text-secondary hover:text-primary border-secondary hover:border-primary">
								<FaNpm className="text-sm sm:text-lg" />
							</div>
						</a>

						<a target="_blank" rel="noreferrer" href="https://github.com/wellbees" className="ml-2 block">
							<div className="p-1 transition-all duration-300 rounded-full shadow-md border border-solid text-secondary hover:text-primary border-secondary hover:border-primary">
								<FaGithub className="text-sm sm:text-lg" />
							</div>
						</a>

						<a target="_blank" rel="noreferrer" href="https://medium.com/wellbees" className="ml-2 block">
							<div className="p-1 transition-all duration-300 rounded-full shadow-md border border-solid text-secondary hover:text-primary border-secondary hover:border-primary">
								<FaMediumM className="text-sm sm:text-lg" />
							</div>
						</a>
						<a
							target="_blank"
							rel="noreferrer"
							href="https://wellbees.talentics.app/#openings"
							className="px-3 py-1 sm:px-6 sm:py-2 text-sm transition-colors duration-300 rounded-full shadow-md bg-primary hover:bg-secondary text-white ml-2"
						>
							{t('Join Us')}
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default memo(Navigation);
