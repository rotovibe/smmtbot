const b1Sec = {
    getB1Message: (word) => {
        if (word === "b1map") {}
        if (word === "b1pre") {
            response = "Pre Service – " +
                "•	Arrive 8:20-8:25 AM to gain access to Worship Center and save seating with bulletin(s) for you and family or guest(s)" +
                "•	Report to 8:30 AM Briefing " +
                "•	Check to see that North Community Room closets doors are vacant. " +
                "•	Check that Ramp Exit Doors to Parking are locked.  " +
                "•	Check Stage doors  " +
                "•	Take seat.  " +
                "•	During last worship song, check North Exit Doors to Town Center.  Text Secure or Not Secure.  " +
                "•	During Prayers – Eyes open – Glance around for any activity that does not look right – DON’T turn body around " +
                "•	MISSING CHILD – MAINTAIN POSITION " +
                "";
        }
        if (word === "b1") {
            response = "During Service –  " +
                "•	Locate where your teammates B2 and B3 Low are sitting.  " +
                "•	Cover Backs for B2 & B3 Low - Glance to R4 as appropriate. " +
                "•	RADIO any SIGNIFICANT DLR to their blind side from South Ramp that is stage bound on a mission. " +
                "•	Be Alert - Smile - Pray - Worship God.  " +
                "•	MISSING CHILD – MAINTAIN POSITION" +
                "";
        }
        if (word === "b1post") {
            response = "Post Service – " +
                "•	Pause in worship center long enough for those exiting North Parking Lot doors are gone.  " +
                "•	As you exit Worship Center check to see that ramp exit doors to parking lot are secure.  " +
                "•	Leave worship center and observe Town Center for 10 minutes or more depending on circumstances." +
                "•	MISSING CHILD – MAINTAIN POSITION";
        }
        return response;
    },
};

module.exports = b1Sec;