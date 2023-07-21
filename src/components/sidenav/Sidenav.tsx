import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faBucket, faCamera, faCircleInfo, faCloudSunRain, faEarthAmericas, faHeadphones, faKitchenSet, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { List, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from "@mui/material";


export interface SidenavListItem {
    label: string;
    faIconDefinition: IconDefinition;
}

const sidenavListItems: SidenavListItem[] = [
    { label: 'Places', faIconDefinition: faEarthAmericas },
    { label: 'Photos', faIconDefinition: faCamera },
    { label: 'Music', faIconDefinition: faHeadphones },
    { label: 'Weather', faIconDefinition: faCloudSunRain },
    { label: 'Bucket List', faIconDefinition: faBucket },
    { label: 'Recipes', faIconDefinition: faKitchenSet },
    { label: 'Quotes', faIconDefinition: faQuoteRight },
    { label: 'About', faIconDefinition: faCircleInfo },
]

export const SidenavListItemButton = (props: SidenavListItem) => {
    const { faIconDefinition, label } = props;

    return (
        <ListItemButton>
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
