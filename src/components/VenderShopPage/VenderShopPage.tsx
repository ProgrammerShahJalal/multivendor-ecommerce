import VendorSidebar from "../VendorSidebar/VendorSidebar";
import VendorCard from "./VendorCard";
import VendorTop from "./VendorTop";

/* This example requires Tailwind CSS v2.0+ */
export default function Example() {
    return (
        <div className="bg-gray-50">
            <VendorTop />
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                <VendorSidebar />
                <VendorCard />
            </div>
        </div>
    )
}
