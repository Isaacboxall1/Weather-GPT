export default function formatResToObj (apiResponse: string) {
    const activities = apiResponse.split('\n').map((activity) => {
        const [numberAndTitle, ...descriptionParts] = activity.split(':');
        const [, title] = numberAndTitle.split('.');
        const description = descriptionParts.join(':').trim();
        return {title: title, description};
    });
    return activities;
}