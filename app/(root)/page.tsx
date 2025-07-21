import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import InterviewCard from "../_components/InterviewCard";
import { getCurrentUser} from "@/lib/actions/auth.action";
import {getInterviewsByUserId,getLatestInterviews} from '@/lib/actions/general.action'


export default async function HomePage() {

  const user = await getCurrentUser();
  const [userInterviews, allInterview] = await Promise.all([
    getInterviewsByUserId(user?.id!),
    getLatestInterviews({ userId: user?.id! }),
  ]);

  const hasPastInterviews = userInterviews?.length! > 0;
  const hasUpcomingInterviews = allInterview?.length! > 0;
  return (
    <>
      <section className="card-cta flex max-sm:flex-col-reverse">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>Master Interviews with AI-Driven Practice & Insights</h2>
          <p className="text-lg">Tackle real interview questions & receive instant, smart feedback</p>
          <Button asChild className="btn-primary max-sm:w-full">
            <Link href="/interview">Start an Interview</Link>
          </Button>
        </div>
          <Image src="/robot.png" alt="hero-img" width={400} height={400} className="max-sm:mb-8"/>
      </section>

      <section className="flex flex-col gap-6 mt-8">
          <h2>Your Interviews</h2>
          <div className="interviews-section">
            {
              hasPastInterviews ? (
                userInterviews?.map((interview)=>(
                  <InterviewCard {...interview} key={interview.id}/>
                ))
              ):(<p>You haven&apos;t taken any interview yet</p>)
            }
          </div>
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>Take an Interview</h2>
        <div className="interviews-section">
          {hasUpcomingInterviews ? (
            allInterview?.map((interview) => (
              <InterviewCard
                key={interview.id}
                userId={user?.id}
                interviewId={interview.id}
                role={interview.role}
                type={interview.type}
                techstack={interview.techstack}
                createdAt={interview.createdAt}
              />
            ))
          ) : (
            <p>There are no interviews available</p>
          )}
        </div>
      </section>
    </>
  );
}
