import { useCallback } from "react";
import { Share } from "react-native";


export default () => {
    const onShare = useCallback(async (message) => {
        try {
            const result = await Share.share({
                message,
                url: 'https://reactnative.dev'
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            console.log(error)
        }
    }, []);

    return { onShare }
}