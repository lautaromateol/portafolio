import { IconBrandGithub, IconLink } from '@tabler/icons-react';

export default function ProjectCard({ image, title, description, repoLink, deployLink, tags }) {
  return (
    <div className="grid grid-cols-2 gap-6">
      <img className="object-contain h-60 shadow-lg rounded-lg border border-secondary-100" src={image} alt={`Imagen de ${title}`} />
      <div className='self-center'>
        <h4 className="text-2xl font-bold mb-2">{title}</h4>
        <div className="flex gap-x-2 mb-4">
        {tags.map(({name, styles, icon}) => {
          return(
            <div className={`${styles} flex items-center justify-center gap-x-1 px-2 py-1 text-xs text-white rounded-full`}>
              {icon}
              {name}
            </div>
          )
        })} 
        </div>
        <p className="text-secondary text-base mb-4">{description}</p>
        <div className="flex gap-x-2">
          <a target='_blank' className="flex items-center justify-center gap-1 px-4 py-1 bg-slate-500 text-white rounded-lg text-sm" href={repoLink}>
            <IconBrandGithub stroke={1} />
            Codigo
          </a>
          <a target='_blank' className="flex items-center justify-center gap-x-1 px-4 py-1 bg-slate-500 text-white rounded-lg text-sm" href={deployLink}>
            <IconLink stroke={1} />
            Preview
          </a>
        </div>
      </div>
    </div>
  )
}
