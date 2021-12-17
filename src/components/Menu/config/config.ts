import { MenuItemsType, DropdownMenuItemType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'
import { nftsBaseUrl } from 'views/Nft/market/constants'

export type ConfigMenuItemsType = MenuItemsType & { hideSubNav?: boolean }

const config: (t: ContextApi['t']) => ConfigMenuItemsType[] = (t) => [
  {
    label: t('Swap'),
    icon: 'Swap',
    href: '/swap?outputCurrency=0xe87b76f519267570fc93c01d376e0cbcdaf78c0c',
    showItemsOnMobile: false,
    items: [
    ],
  },

    {
    label: t('ADD Liquidity'),
    icon: 'Liquidity',
    href: '/liquidity',
    showItemsOnMobile: false,
    items: [
    ],
  },
 
]

export default config
