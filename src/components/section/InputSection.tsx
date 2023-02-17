import Input from '@/components/ui/Input';
import Label from '../ui/Label';
import Select from '../ui/Select';
import Textarea from '@/components/ui/Textarea';

const InputSection = () => {
    return (
        <section className="p-5">
            <h2>Input</h2>
            <div className="mt-4 max-w-lg">
                <h3>Simple</h3>
                <div className="flex items-center mt-3 gap-x-4">
                    <div>
                        <Label htmlFor="first-name">First name</Label>
                        <Input id="first-name" className="mt-2" />
                    </div>
                </div>
            </div>
            <div className="mt-4 max-w-lg">
                <h3>Input Select</h3>
                <div className="flex items-center mt-3 gap-x-4">
                    <div className="w-full">
                        <Label htmlFor="country">Country</Label>
                        <Select
                            id="country"
                            name="country"
                            autoComplete="country-name"
                            className="mt-2"
                        >
                            <option>United States</option>
                            <option>Canada</option>
                            <option>Mexico</option>
                        </Select>
                    </div>
                </div>
            </div>
            <div className="mt-4 max-w-lg">
                <h3>Input Group</h3>
                <div className="w-full mt-3">
                    <Label htmlFor="company-website">Website</Label>
                    <div className="mt-2 flex rounded-md shadow-sm">
                        <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
                            http://
                        </span>
                        <Input
                            id="company-website"
                            name="company-website"
                            autoComplete="country-name"
                            className="flex-1 rounded-none rounded-r-md"
                        />
                    </div>
                </div>
            </div>
            <div className="mt-4 max-w-lg">
                <h3>Input Textarea</h3>
                <div className="w-full mt-3">
                    <Label htmlFor="about">About</Label>
                    <Textarea
                        className="mt-2"
                        id="about"
                        name="about"
                        rows={4}
                        placeholder="you@example.com"
                    />
                </div>
            </div>
        </section>
    );
};

export default InputSection;
