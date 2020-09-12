import React, { useState, useEffect } from "react";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AppsIcon from "@material-ui/icons/Apps";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import ClearAllIcon from "@material-ui/icons/ClearAll";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import db from "./firebase";
import { useStateValue } from "./StateProvider";

function Sidebar() {
  const [channels, setChannels] = useState([]);
  const [{ user }] = useStateValue();

  useEffect(() => {
    db.collection("rooms").onSnapshot(snapshot =>
      setChannels(
        snapshot.docs.map(doc => ({
          id: doc.id,
          name: doc.data().name
        }))
      )
    );
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2>Slack Clone</h2>
          <h3>
            <FiberManualRecordIcon />
            {user?.displayName}
          </h3>
        </div>
        <CreateIcon />
      </div>
      <SidebarOption Icon={ClearAllIcon} title={"All unreads"} />
      <SidebarOption Icon={InsertCommentIcon} title={"Threads"} />
      <SidebarOption Icon={QuestionAnswerIcon} title={"All DMs"} />
      <SidebarOption Icon={InboxIcon} title={"Mentions & reactions"} />
      <SidebarOption Icon={DraftsIcon} title={"Saved items"} />
      <SidebarOption Icon={BookmarkBorderIcon} title={"Channel Browser"} />
      <SidebarOption Icon={PeopleAltIcon} title={"People & user groups"} />
      <SidebarOption Icon={AppsIcon} title={"Apps"} />
      <SidebarOption Icon={FileCopyIcon} title={"File browser"} />
      <SidebarOption Icon={ExpandLessIcon} title={"Show Less"} />
      <br />
      <SidebarOption Icon={ExpandMoreIcon} title={"Channels"} />
      <br />
      <SidebarOption Icon={AddIcon} title={"Add Channel"} addChannelOption />
      {channels.map(channel => (
        <SidebarOption title={channel.name} id={channel.id} key={channel.id} />
      ))}
    </div>
  );
}

export default Sidebar;
