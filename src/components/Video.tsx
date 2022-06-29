import {
  CaretRight,
  DiscordLogo,
  FileArrowDown,
  Lightning,
} from "phosphor-react";
import { Player, Youtube, DefaultUi } from "@vime/react";
import "@vime/core/themes/default.css";
import { gql, useQuery } from "@apollo/client";
import Icon from "./icons";
import { useState } from "react";
const GET_LESSION_BY_SLUG = gql`
  query GettLessonBySlgug($slug: String) {
    lesson(where: { slug: $slug }) {
      videoId
      title
      description
      teacher {
        avatarURL
        bio
        name
      }
    }
  }
`;

interface VideosPropsSlug {
  lessonSlug: {
    title: string;
    videoId: string;
    description: string;
    teacher: {
      bio: string;
      avatarURL: string;
      name: string;
    };
  };
}
interface VideosProps {
  lessonSlug: string;
}
export function Video(props: VideosProps) {
  const { data } = useQuery(GET_LESSION_BY_SLUG, {
    variables: {
      slug: props.lessonSlug,
    },
  });
  if (!data)
    return (
      <div className="flex-1">
        <p>carregando</p>
      </div>
    );
  console.log(data.lesson.videoId);
  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1188px] max-h-[68vh] aspect-video"></div>
      </div>

      <div className="p-8 max-w-[1108] m-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-16">
          <div className="flex-1">
            <h1 className="font-bold text-lg md:text-2xl text-gray-100">
              {data.lesson.title}
            </h1>
            <p className="mt-4 text-sm w-full md:text-lg text-gray-300 ">
              {data.lesson.description}
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <a
              href="#"
              className="hover:bg-green-700  transition-colors p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center"
            >
              <DiscordLogo size={24} />
              Comunidade do Discord
            </a>
            <a
              href="#"
              className="hover:bg-blue-500 hover:text-black p-4 transition-colors flex items-center rounded font-bold border border-blue-500 text-blue-500 uppercase gap-2 justify-center"
            >
              <Lightning size={24} />
              Desafios
            </a>
          </div>
        </div>
        <div className="flex items-center gap-4 mt-6 ">
          <img
            className="h-16 w-16 border-2 border-blue-500 rounded-full"
            src={data.lesson.teacher.avatarURL}
            alt=""
          />
          <div className="leading-relaxed">
            <strong className="font-bold text-2xl block">
              {data.lesson.teacher.name}
            </strong>
            <span className="text-gray-200 text-sm">
              {data.lesson.teacher.bio}
            </span>
          </div>
        </div>
      </div>
      <div className="gap-8 mt-20 grid m-10 grid-cols-1 md:grid-cols-2">
        <a
          href="#"
          className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-3 hover:bg-gray-600 transition-colors"
        >
          <div className=" bg-green-700  h-full p-6 flex items-center">
            <FileArrowDown size={40} />
          </div>
          <div className=" py-6 leading-relaxed">
            <strong className="text-2xl">Material Complementar</strong>
            <p className="text-sm text-gray-200 mt-2">
              Acesse o material complementar para acelerar o seu desenvolvimento
            </p>
          </div>
          <div className="h-full p-6 flex items-center">
            <CaretRight size={24} />
          </div>
        </a>
        <a
          href="#"
          className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors"
        >
          <div className=" bg-green-700 h-full p-6 flex items-center">
            <FileArrowDown size={40} />
          </div>
          <div className=" py-6 leading-relaxed">
            <strong className="text-2xl">Wallpapers exclusivos</strong>
            <p className="text-sm text-gray-200 mt-2">
              Baixe wallpapers exclusivos do Ignite Lab e personalize a sua
              máquina
            </p>
          </div>
          <div className="h-full p-6 flex items-center">
            <CaretRight size={24} />
          </div>
        </a>
      </div>
      <footer>
        <div className=" p-2 m-6 border-t border-gray-600 ">
          <div className="flex items-center md:flex-row flex-col justify-center md:justify-between mt-6">
            <div className="flex md:flex-row flex-col  items-center">
              <Icon />
              <p className="mx-5 text-base text-gray-400 flex ">
                Rocketseat - Todos os direitos reservados
              </p>
            </div>
            <a
              href="#"
              className="mx-5 text-base items-center text-gray-400 flex "
            >
              Políticas de privacidade
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
