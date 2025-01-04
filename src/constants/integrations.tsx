import { FaInstagram } from "react-icons/fa6";
type Props = {
  title: string
  icon: React.ReactNode
  description: string
  strategy: 'INSTAGRAM' | 'CRM'
}

export const INTEGRATION_CARDS: Props[] = [
  {
    title: 'Connect Instagram',
    description:
      'Lorem ipsum dolor sit amet consectetur. Mauris scelerisque tincidunt ultrices',
    icon: <FaInstagram  className="h-10 w-10 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045]" />,
    strategy: 'INSTAGRAM',
    
  },
//   {
//     title: 'Connect Salesforce',
//     description:
//       'Lorem ipsum dolor sit amet consectetur. Mauris scelerisque tincidunt ultrices',
//     icon: <SalesForceDuoToneBlue />,
//     strategy: 'CRM',
//   },
]