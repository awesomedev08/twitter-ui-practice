import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';

import cx from 'classnames';
import { ReactNode } from 'react';
import NavItem from '@ui/NavItem';

import {
	HiOutlineEllipsisHorizontal,
	HiOutlineFaceFrown,
	HiOutlineUserPlus,
	HiOutlineQueueList,
	HiOutlineSpeakerXMark,
	HiOutlineNoSymbol,
	HiCodeBracket,
	HiOutlineFlag,
} from 'react-icons/hi2';

interface AccordionItem {
	href: string;
	text: string;
	width: 'full' | 'inline' | 'mobile';
	size: 'small' | 'default' | 'large';
	icon?: ReactNode;
}

const username = 'royquilor';

const items: AccordionItem[] = [
	{
		href: '/',
		text: "This Tweet's not helpful",
		width: 'full',
		size: 'small',
		icon: <HiOutlineFaceFrown className="w-4 h-4" />,
	},
	{
		href: '/',
		text: `Follow @${username}`,
		width: 'full',
		size: 'small',
		icon: <HiOutlineUserPlus className="w-4 h-4" />,
	},
	{
		href: '/',
		text: `Add/remove @${username} from Lists`,
		width: 'full',
		size: 'small',
		icon: <HiOutlineQueueList className="w-4 h-4" />,
	},
	{
		href: '/',
		text: `Mute @${username}`,
		width: 'full',
		size: 'small',
		icon: <HiOutlineSpeakerXMark className="w-4 h-4" />,
	},
	{
		href: '/',
		text: `Block @${username}`,
		width: 'full',
		size: 'small',
		icon: <HiOutlineNoSymbol className="w-4 h-4" />,
	},
	{
		href: '/',
		text: 'Embed Tweet',
		width: 'full',
		size: 'small',
		icon: <HiCodeBracket className="w-4 h-4" />,
	},
	{
		href: '/',
		text: 'Report Tweet',
		width: 'full',
		size: 'small',
		icon: <HiOutlineFlag className="w-4 h-4" />,
	},
];

const DropdownMenuDemo = () => (
	<DropdownMenuPrimitive.Root>
		<DropdownMenuPrimitive.Trigger asChild>
			<button
				className="IconButton hover:bg-slate-200 rounded-full"
				aria-label="Customize options"
			>
				<HiOutlineEllipsisHorizontal className="h-6 w-6" />
			</button>
		</DropdownMenuPrimitive.Trigger>

		<DropdownMenuPrimitive.Portal>
			<DropdownMenuPrimitive.Content
				sideOffset={0}
				alignOffset={0}
				align="end"
				className={cx(
					'DropdownMenuContent radix-side-top:animate-slide-up radix-side-bottom:animate-slide-down',
					'rounded-lg shadow-2xl w-80 overflow-hidden',
					'bg-white border border-slate-200',
				)}
			>
				{items.map(({ href, text, width, size, icon }, i) => (
					<DropdownMenuPrimitive.Item
						key={`header-${i}`}
						// value={`item-${i + 1}`}
						className="focus:outline-none overflow-hidden"
					>
						<NavItem href="{href}" width={width} size={size}>
							{icon}
							<div className="inline-flex flex-none text-lg font-medium">
								{text}
							</div>
						</NavItem>
					</DropdownMenuPrimitive.Item>
				))}
			</DropdownMenuPrimitive.Content>
		</DropdownMenuPrimitive.Portal>
	</DropdownMenuPrimitive.Root>
);

export default DropdownMenuDemo;
