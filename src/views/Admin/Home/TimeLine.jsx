import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineIcon,
    Typography,
    TimelineHeader,
} from "@material-tailwind/react";
import { AttachMoneyTwoTone, Fitbit, Notifications } from "@mui/icons-material";

export function ActivitiesTimeline() {
    return (
        <div className="">
            <Timeline>
                <TimelineItem className="h-28">
                    <TimelineConnector className="!w-[78px]" />
                    <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                        <TimelineIcon className="p-3" variant="ghost">
                            <Notifications className="h-5 w-5" />
                        </TimelineIcon>
                        <div className="flex flex-col gap-1">
                            <Typography variant="h6" color="blue-gray">
                                $2400, Design changes
                            </Typography>
                            <Typography variant="small" color="gray" className="font-normal">
                                22 DEC 7:20 PM
                            </Typography>
                        </div>
                    </TimelineHeader>
                </TimelineItem>
                <TimelineItem className="h-28">
                    <TimelineConnector className="!w-[78px]" />
                    <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                        <TimelineIcon className="p-3" variant="ghost" color="red">
                            <Fitbit className="h-5 w-5" />
                        </TimelineIcon>
                        <div className="flex flex-col gap-1">
                            <Typography variant="h6" color="blue-gray">
                                New order #1832412
                            </Typography>
                            <Typography variant="small" color="gray" className="font-normal">
                                21 DEC 11 PM
                            </Typography>
                        </div>
                    </TimelineHeader>
                </TimelineItem>
                <TimelineItem className="h-28">
                    <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                        <TimelineIcon className="p-3" variant="ghost" color="green">
                            <AttachMoneyTwoTone className="h-5 w-5" />
                        </TimelineIcon>
                        <div className="flex flex-col gap-1">
                            <Typography variant="h6" color="blue-gray">
                                Payment completed for order #4395133
                            </Typography>
                            <Typography variant="small" color="gray" className="font-normal">
                                20 DEC 2:20 AM
                            </Typography>
                        </div>
                    </TimelineHeader>
                </TimelineItem>
            </Timeline>
        </div>
    );
}