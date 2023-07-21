import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faBucket, faCamera, faCircleInfo, faCloudSunRain, faEarthAmericas, faHeadphones, faKitchenSet, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { List, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from "@mui/material";


export interface SidenavListItem {
    label: string;
    href: string;
    faIconDefinition: IconDefinition;
}

const sidenavListItems: SidenavListItem[] = [
    { label: 'Places', href: '/places', faIconDefinition: faEarthAmericas },
    { label: 'Photos', href: '/', faIconDefinition: faCamera },
    { label: 'Music', href: '/', faIconDefinition: faHeadphones },
    { label: 'Weather', href: '/', faIconDefinition: faCloudSunRain },
    { label: 'Bucket List', href: '/', faIconDefinition: faBucket },
    { label: 'Recipes', href: '/', faIconDefinition: faKitchenSet },
    { label: 'Quotes', href: '/', faIconDefinition: faQuoteRight },
    { label: 'About', href: '/', faIconDefinition: faCircleInfo },
]

export const SidenavListItemButton = (props: SidenavListItem) => {
    const { faIconDefinition, href, label } = props;

    return (
        <ListItemButton href={href}>
            <ListItemIcon>
                <FontAwesomeIcon icon={faIconDefinition} />
            </ListItemIcon>
            <ListItemText>{label}</ListItemText>
        </ListItemButton>
    );
}

export const Sidenav = () => {
    const listItems = sidenavListItems.map(item => SidenavListItemButton(item))

    return (
        <List
            component='nav'
            subheader={<ListSubheader>Pages</ListSubheader>}
        >
            {listItems}
        </List>
    );
}
