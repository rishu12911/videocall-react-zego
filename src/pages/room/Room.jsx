import React from 'react'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';


export default function Room() {
    const { roomId } = useParams();

    // myMeeting Function
    const myMeeting = async (element) => {
        const appID = 1911609100;
        const serverSecret = "42a9c7663f6de45a57d465bac072ed05";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
            serverSecret,
            roomId,
            Date.now().toString(),
            "Enter your name"
        );

        const zc = ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container: element,
            sharedLinks: [{
                name: 'Copy Link',
                url: `http://fakeskype/room/${roomId}`
            }],
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall
            },
            showScreenSharingButton: false
        })

    }
    return (
        <div>
            <div ref={myMeeting} />
        </div>
    )
}