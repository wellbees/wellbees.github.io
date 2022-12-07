import React from 'react';
import withReducer from 'app/store/withReducer';
import reducer from './store/reducers';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getPublicHomePageRepoData, PERPAGE } from './store/actions';
import { AiOutlineFork, AiOutlineStar } from 'react-icons/ai';
import { BiLoaderAlt } from 'react-icons/bi';

import clsx from 'clsx';

function PageApp() {
	const { t } = useTranslation();
	const dispatch = useDispatch();

	const { publicRepos, publicReposCount, currentRepoPage, isLoading } = useSelector(
		({ publicPages }) => publicPages.homepage
	);

	useEffect(() => {
		dispatch(getPublicHomePageRepoData(1));
	}, [dispatch]);

	return (
		<div>
			<img
				className="min-h-[40vh] max-h-[60vh] w-full object-cover"
				src="assets/images/slider.png"
				alt="slider"
			/>

			<div className="container mx-auto px-4 mt-12 mb-20">
				<div className="mb-2 text-xl font-semibold text-center">{t('Our Community Codes')}</div>
				<div className="flex flex-row flex-wrap -mx-3 justify-center">
					{publicRepos.length === 0 && (
						<div className="w-full text-secondary pt-6 pb-12">
							<BiLoaderAlt className="animate-spin mx-auto" size={54} />
						</div>
					)}
					{publicRepos.map(item => (
						<div key={item.id} className="p-3 w-full sm:w-1/2">
							<div className="border border-gray-300 rounded-md py-3 px-4 h-full flex flex-col justify-center">
								<a
									target="_blank"
									rel="noreferrer"
									href={item.html_url}
									className="text-lg transition-color duration-300 text-secondary hover:text-primary font-medium"
								>
									{item.name}
								</a>
								<div className="text-md text-stone-600">{item.description}</div>
								<div className="text-stone-700 my-2">
									<div className="flex flex-row">
										<div className="flex items-center mr-5">
											<div
												className={clsx(
													'h-3 w-3 rounded-full mr-1',
													`bg-github-${item.language}`
												)}
											/>
											{item.language}
										</div>
										<div className="flex items-center mr-5">
											<AiOutlineStar /> {item.stargazers_count}
										</div>
										<div className="flex items-center mr-5">
											<AiOutlineFork /> {item.forks_count}
										</div>
									</div>
								</div>

								<div className="flex flex-row flex-wrap">
									{item?.topics.map(key => (
										<div
											key={key}
											className="py-1 px-3 bg-slate-200/50 text-stone-600 text-sm rounded-full mr-3 mb-2"
										>
											{key}
										</div>
									))}
								</div>
							</div>
						</div>
					))}
				</div>
				{publicReposCount > PERPAGE && publicReposCount > publicRepos?.length && (
					<button
						className="px-6 py-2 mt-2 text-sm transition-colors duration-300 rounded-full shadow-md bg-secondary hover:bg-primary text-white max-w-xs text-center mx-auto flex flex-row items-center disabled:bg-stone-400"
						onClick={() => dispatch(getPublicHomePageRepoData(currentRepoPage))}
						disabled={isLoading}
					>
						{isLoading && <BiLoaderAlt className="mr-2 animate-spin" />}
						{t('Load More')}
					</button>
				)}
			</div>
			<div className="h-[1px] w-full bg-slate-200" />
			<div className="bg-white py-12">
				<div className="container mx-auto px-4">
					<div className="mb-2 text-xl font-semibold text-center">{t('Because we love coding!')}</div>
					<div className="flex flex-row flex-wrap -mx-3 justify-center">
						<div className="p-3 w-full sm:w-1/2 md:w-1/3">
							<img alt="live" src="assets/images/live.png" className="w-full mb-2" />
							{/* <div className="text-stone-600 text-md font-medium">Başlık</div>
							<div className="text-stone-500 text-sm">Açıklama</div> */}
						</div>
						<div className="p-3 w-full sm:w-1/2 md:w-1/3">
							<img alt="sleep" src="assets/images/sleep.png" className="w-full mb-2" />
							{/* <div className="text-stone-600 text-md font-medium">Başlık</div>
							<div className="text-stone-500 text-sm">Açıklama</div> */}
						</div>
						<div className="p-3 w-full sm:w-1/2 md:w-1/3">
							<img alt="brain" src="assets/images/brain.png" className="w-full mb-2" />
							{/* <div className="text-stone-600 text-md font-medium">Başlık</div>
							<div className="text-stone-500 text-sm">Açıklama</div> */}
						</div>
					</div>
				</div>
			</div>
			<a
				target="_blank"
				rel="noreferrer"
				href="https://wellbees.talentics.app/#openings"
				className="p-4 bg-primary  font-medium text-center block hover:bg-secondary text-white border-b border-primary"
			>
				{t("Let's work together")}
			</a>
		</div>
	);
}

export default withReducer('publicPages', reducer)(PageApp);
