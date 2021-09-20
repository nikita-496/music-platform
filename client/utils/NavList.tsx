import * as React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { useRouter } from 'next/dist/client/router';
import { IMenuItem } from '../types/menu'

interface NavListProps {
  menuItem: IMenuItem[];
}
 
const NavList: React.FC<NavListProps> = ({menuItem}) => {
  const router = useRouter()
  return (
    <>
      {menuItem.map(({text, href}, index) => (
        <ListItem button key={href} onClick={() => router.push(href)}>
          <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))
      }
    </>
  )
}
 
export default NavList;