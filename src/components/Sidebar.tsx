import { Lesson } from "./Lesson";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";
const GET_LESSON_QUERY = gql`
  query {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      slug
      id
      title
      availableAt
      lessonType
    }
  }
`;
interface GetLessons {
  lessons: {
    id: string;
    title: string;
    slug: string;
    availableAt: string;
    lessonType: "live" | "class";
  }[];
}
export function SideBar() {
  const { data } = useQuery<GetLessons>(GET_LESSON_QUERY);
  return (
    <aside className="md:w-[348px] hidden md:block  md:bg-gray-700 border-l p-6 border-gray-600">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma de aulas
      </span>
      <div className="flex flex-col gap-8">
        {data?.lessons.map((data) => (
          <Lesson
            key={data.id}
            title={data.title}
            slug={data.slug}
            available={new Date(data.availableAt)}
            type={data.lessonType}
          />
        ))}
      </div>
    </aside>
  );
}
