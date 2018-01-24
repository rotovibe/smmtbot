const b1Sec = {
    getB1Message: (word) => {
        if (word === "b1map") {}
        if (word === "b1pre") {
            response = "Pre Service –  \n" +
                "\t •	Arrive 8:20-8:25 AM to gain access to Worship Center and save seating with bulletin(s) for you and family or guest(s) \n" +
                "\t •	Report to 8:30 AM Briefing \n" +
                "\t •	Check to see that North Community Room closets doors are vacant. \n" +
                "\t •	Check that Ramp Exit Doors to Parking are locked.  \n" +
                "\t •	Check Stage doors  \n" +
                "\t •	Take seat.  \n" +
                "\t •	During last worship song, check North Exit Doors to Town Center.  Text Secure or Not Secure. \n " +
                "\t •	During Prayers – Eyes open – Glance around for any activity that does not look right – DON’T turn body around \n" +
                "\t •	MISSING CHILD – MAINTAIN POSITION \n" +
                "";
        }
        if (word === "b1") {
            response = "During Service –  \n" +
                "\t •	Locate where your teammates B2 and B3 Low are sitting.  \n" +
                "\t •	Cover Backs for B2 & B3 Low - Glance to R4 as appropriate. \n" +
                "\t •	RADIO any SIGNIFICANT DLR to their blind side from South Ramp that is stage bound on a mission. \n" +
                "\t •	Be Alert - Smile - Pray - Worship God.  \n" +
                "\t •	MISSING CHILD – MAINTAIN POSITION\n" +
                "";
        }
        if (word === "b1post") {
            response = "Post Service – \n" +
                "\t •	Pause in worship center long enough for those exiting North Parking Lot doors are gone.  \n" +
                "\t •	As you exit Worship Center check to see that ramp exit doors to parking lot are secure.  \n" +
                "\t •	Leave worship center and observe Town Center for 10 minutes or more depending on circumstances. \n" +
                "\t •	MISSING CHILD – MAINTAIN POSITION \n";
        }
        return response;
    },
};

module.exports = b1Sec;