import { ReactNode } from 'react';
import DropdownMenuDemo from '@rd/DropdownMenu';
import HoverCardDemo from '@rd/HoverCard';

import {
	HiOutlineHeart,
	HiArrowUpTray,
	HiOutlineChatBubbleOvalLeft,
	HiOutlineArrowPath,
	HiOutlineChartBarSquare,
} from 'react-icons/hi2';

interface Props {
	content: string;
	name: string;
	username: string;
	date: string;
	src: string;
	initials: string;
	followers: string;
	following: string;
	description: string;
	children?: ReactNode;
}

const Post = ({
	content,
	name,
	username,
	date,
	children,
	src,
	initials,
	followers,
	following,
	description,
	...props
}: Props) => (
	<div className="flex flex-1 gap-x-4">
		<div className="flex-shrink-0">
			<HoverCardDemo
				src={src}
				alt={name}
				initials={initials}
				name={name}
				username={username}
				following={following}
				followers={followers}
				description={description}
			/>
		</div>
		<div className="flex flex-col flex-1">
			<div className="flex flex-1">
				<div className="flex flex-1 gap-x-1 text-sm">
					<span className="text-slate-900 font-bold">{name}</span>
					<span className="text-slate-600 font-medium">@{username}</span>·
					<span className="text-slate-600 font-medium">{date}</span>
				</div>
				<div className="">
					<DropdownMenuDemo />
				</div>
			</div>
			<div className="text-sm text-slate-900 mb-4">{content}</div>
			{children}
			<div>
				<ul className="flex gap-x-10 xl:gap-x-14 text-xs text-slate-700 [&_li:first-child]:hidden [&_li:first-child]:lg:flex [&_li]:flex [&_li]:items-center [&_li]:gap-x-2 [&_li:xl]:gap-x-3 ">
					<li className="">
						<HiOutlineChartBarSquare className="w-5 h-5" />
						20
					</li>
					<li>
						<HiOutlineChatBubbleOvalLeft className="w-5 h-5" />2
					</li>
					<li>
						<HiOutlineArrowPath className="w-5 h-5" />1
					</li>
					<li>
						<HiOutlineHeart className="w-5 h-5" />
						23
					</li>
					<li>
						<HiArrowUpTray className="w-5 h-5" />
					</li>
				</ul>
			</div>
		</div>
	</div>
);

export default Post;
