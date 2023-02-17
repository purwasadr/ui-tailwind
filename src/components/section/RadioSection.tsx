import Label from '../ui/Label';
import Radio from '../ui/Radio';

const RadioSection = () => {
    return (
        <section className="p-5">
            <h2>Checkbox</h2>
            <div className="mt-4 max-w-lg">
                <div className="mt-3">
                    <h4 className="font-medium">Push Notification</h4>
                    <p className="text-sm">These are delivered via SMS to your mobile phone.</p>
                    <div className="flex flex-col gap-y-4 mt-3">
                        <div className="flex items-center gap-x-3">
                            <Radio id='push-everything' name="push-notifications" />
                            <Label htmlFor='push-everything'>Everything</Label>
                        </div>
                        <div className="flex items-center gap-x-3">
                            <Radio id='push-email' name="push-notifications" />
                            <Label htmlFor='push-email'>Same as email</Label>
                        </div>
                        <div className="flex items-center gap-x-3">
                            <Radio id='push-nothing' name="push-notifications" />
                            <Label htmlFor='push-nothing'>No push notifications</Label>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default RadioSection;