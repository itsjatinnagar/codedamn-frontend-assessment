import Button from '@/components/Button';
import ButtonRow from '@/components/ButtonRow';
import ExperienceSection from './ExperienceSection';
import EducationSection from './EducationSection';
import SkillSection from './SkillSection';
import InterestSection from './InterestSection';
import LanguageSection from './LanguageSection';

const EditResumePage = () => {
	return (
		<main className='flex flex-col gap-y-10 max-w-2xl w-full'>
			<ExperienceSection />
			<EducationSection />
			<SkillSection />
			<InterestSection />
			<LanguageSection />
			<ButtonRow>
				<Button className='btn-secondary'>Cancel</Button>
				<Button className='btn-primary'>Save Changes</Button>
			</ButtonRow>
		</main>
	);
};

export default EditResumePage;
