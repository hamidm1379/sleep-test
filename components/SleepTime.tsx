import SetTimer from '@/components/sleeptime/SetTimer';
import AddSleepTime from '@/components/sleeptime/AddSleepTime';
import EditSleepTime from '@/components/sleeptime/EditSleepTime';
import GeneralReportModal from '@/components/sleeptime/GeneralReportModal';

export default function SleepTimeSection() {
    return (
        <section className="sm:px-[20px] md:px-[200px] lg:px-[400px] pt-3">

            <SetTimer />

            <EditSleepTime />

            <AddSleepTime />

            <GeneralReportModal />

        </section>
    );
}