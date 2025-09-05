import Chart from '@/components/generalreport/Chart';
import Table from '@/components/generalreport/Table';

export default function GeneralReportSection() {
    return (
        <section className="sm:px-[20px] md:px-[200px] lg:px-[400px] mt-5 mx-auto pb-8">
            <Chart />
            <div className="border-1 border-[#EDEDED] max-[400px]:w-70 w-80 mx-auto my-8 md:my-12"></div>
            <Table />
        </section>
    );
}