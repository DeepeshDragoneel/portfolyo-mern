import {NavbarR,NavbarBg,NavbarIconColor,IconColor,onScrollBg,
    NavHoverColor,HomeIconText,ArticleIconText,AboutIconText,ContactIconText,NavbarIconText,TabPointer,OpenEditor,
    UsernameP,ProfilePicture,DescribeP,AddressP,DescribeFontP,AddressFontP,UsernameFontP,ButtonStyleP,DButtonColorP,
    HButtonColorP,HTextColorP,DTextColorP,dpStructureP,layoutp,alignp,profileSectionBackground,encryptBackgroundWords,
	profileSectionBackgroundColor,AvatarCrop,openbackgroundp,namee,descriptione,card1edu,educationsectiontitle,
    currenttabe,educationhfontname,educationpfontname,fontcolore,fontcolorep,animationtypeeh,animationtimeeh,
    animationdelayeh,carddetailse,editcardine,fontsineb,fontfamilyedu,imagetypeedu,newimageinedu,layoutinedu,shadowcardedu, 
	aboutSectionBackground,ProjectIconText,
	AboutSectionImageUploader,

} from './reducers';
import projectreducers from './projectreducers';
import { createStore, combineReducers } from "redux";
// import { logger } from "redux-logger";
// import { composeWithDevTools } from "redux-devtools-extension";

let red = combineReducers({
	Navbar: NavbarR,
	NavbarBg: NavbarBg,
	NavbarIconColor: NavbarIconColor,
	IconColor: IconColor,
	onScrollBg: onScrollBg,
	NavHoverColor: NavHoverColor,
	ProjectIconText,
	HomeIconText: HomeIconText,
	ArticleIconText,
	AboutIconText,
	ContactIconText,
	NavbarIconText,
	profileSectionBackground: profileSectionBackground,
	encryptBackgroundWords: encryptBackgroundWords,
	profileSectionBackgroundColor: profileSectionBackgroundColor,
	AvatarCrop: AvatarCrop,
	aboutSectionBackground,
	TabPointer,
	OpenEditor,
	ProfilePicture,
	UsernameP,
	DescribeP,
	AddressP,
	DescribeFontP,
	AddressFontP,
	UsernameFontP,
	ButtonStyleP,
	DButtonColorP,
	HButtonColorP,
	HTextColorP,
	DTextColorP,
	dpStructureP,
	layoutp,
	alignp,
	openbackgroundp,
	AboutSectionImageUploader,
    namee,
    descriptione,
    card1edu,
    educationsectiontitle,
    currenttabe,
    educationhfontname,
    educationpfontname,
    fontcolore,
    fontcolorep,
    animationtypeeh,
    animationtimeeh,
    animationdelayeh,
    carddetailse,
    fontsineb,
    fontfamilyedu,
    editcardine,
    imagetypeedu,
    newimageinedu,
    layoutinedu,
    shadowcardedu,
	projectheader:projectreducers({name:"PROJECTS",fontFamily:"open sans",
				description:"Lorem ipsum dolor sit, quos dignissimos. Quas ratione quasi et placeat consequuntur excepturi laboriosam! Aliquid, laboriosam?  Quas ratione quasi et placeat consequuntur excepturi laboriosam! Aliquid, laboriosam? Quas ratione quasi et placeat consequuntur excepturi laboriosam! Aliquid, laboriosam? Quas ratione quasi et placeat consequuntur excepturi laboriosam! Aliquid, laboriosam?",
				ButtonText:"More Projects",
				animation:"fade-right",
				delay:"0",
				duration:"0.3",
				fontStyle:"open sans",
				color:"#000",
				fontStylep:"open sans",
				colorp:"#777",
				colorbbg:"#3f50b5",
				colorbt:"#fff",
				colora:"#000",
				colorabg:"#fff"
			},
	"projectname"),
	projectcard:projectreducers(
		[
			{
				key:1,
				to:"",
				title:"Project1",
				about:"Lorem ipsum dolor sit, quos dignissimos. Quas ratione quasi et placeat consequuntur excepturi laboriosam! Aliquid, laboriosam? ",
				buttonText:"Source/Demo",
				techhead:"Technologies Used",
				techs:[
					"html",
					"css",
					"react",
					"js",
					"node",
					"python"
				],
				animation:"fade-up",
				duration:"0.3",
				delay:"0",
				image:"https://source.unsplash.com/random/150x150",
				imagetype:"round bord"
			},
			{
				key:1,
				to:"",
				title:"Project2",
				about:"Lorem ipsum dolor sit, quos dignissimos. Quas ratione quasi et placeat consequuntur excepturi laboriosam! Aliquid, laboriosam? ",
				buttonText:"Source/Demo",
				techhead:"Technologies Used",
				techs:[
					"html",
					"css",
					"react",
					"js",
					"node",
					"python"
				],
				animation:"fade-up",
				duration:"0.3",
				delay:"0",
				image:"https://source.unsplash.com/random/150x150",
				imagetype:"round bord"
			},
			{
				key:1,
				to:"",
				title:"Project3",
				about:"Lorem ipsum dolor sit, quos dignissimos. Quas ratione quasi et placeat consequuntur excepturi laboriosam! Aliquid, laboriosam? ",
				buttonText:"Source/Demo",
				techhead:"Technologies Used",
				techs:[
					"html",
					"css",
					"react",
					"js",
					"node",
					"python"
				],
				animation:"fade-up",
				duration:"0.3",
				delay:"0",
				image:"https://source.unsplash.com/random/150x150",
				imagetype:"round bord"
			}
		],
		"projectcard"),
	projectbody:projectreducers(
		{
			"background":3,
			"shadow":"0 0 0 0",
			"borderRadius":0,
			"backgroundColor":"#fff"
		},
		"projectbody"
	),
	addproject:projectreducers({
		key:1,
		to:"",
		title:"",
		about:"",
		buttonText:"",
		techhead:"",
		techs:[
		],
		animation:"fade-up",
		duration:"0.3",
		delay:"0",
		imagetype:"round bord",
		image:""
	}    ,"addproject"),
	currenttabpro:projectreducers(0,"currenttabpro"),
	projectlayout:projectreducers(0,"projectlayout"),
	editproject:projectreducers({
		key:"",
		to:"",
		title:"",
		about:"",
		buttonText:"",
		techhead:"",
		techs:[
		],
		animation:"fade-up",
		duration:"0.3",
		delay:"0",
		image:"",
		index:null,
		imagetype:"round bord"
	},"editproject"),
	projectcustom:projectreducers({
		fontFamilyN:"open sans",
		fontFamilyA:"open sans",
		fontFamilyT:"open sans",
		colorN:"#000",
		colorA:"#777",
		colorBt:"#002884",
		colorTh:"#000",
		colorTc:"#03bfcb",
		bgcolor:"#fff",
		bgtag:"#fff",
		shadow:"0 .5rem 1rem rgba(0,0,0,.15)",
		borderRadius:"50",
	},"projectcustom"),
	editallproject:projectreducers({
		animation:"fade-up",
		duration:"0.3",
		delay:"0",
	},"editallproject")
});
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const Store = createStore(red);
export default Store;
