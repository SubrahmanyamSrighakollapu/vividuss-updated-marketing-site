'use client';
import { useState } from 'react';
import { projects, projectFilters } from '@/data/projects';
import type { Project } from '@/types';
import { Visual } from '@/components/ui/Visual';
import { Icon } from '@/components/ui/Icon';
import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/sections/Shared';
function ProjectCard({ project, onSelect }: { project: Project; onSelect: (p: Project) => void }) {
  return (
    <article className="project-card">
      <button
        className="project-image-button"
        onClick={() => onSelect(project)}
        aria-label={'View ' + project.title}
      >
        <Visual asset={project.image} alt={project.title} />
        <span className="image-arrow">
          <Icon name="ArrowUpRight" />
        </span>
      </button>
      <div className="project-copy">
        <p className="project-category">{project.category}</p>
        <h3>
          <button onClick={() => onSelect(project)}>{project.title}</button>
        </h3>
        <p>{project.description}</p>
        <button className="text-link" onClick={() => onSelect(project)}>
          View Project <Icon name="ArrowUpRight" size={15} />
        </button>
      </div>
    </article>
  );
}
function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  return (
    <Modal
      open={!!project}
      onClose={onClose}
      title={project?.title || 'Project'}
      className="project-modal"
    >
      {project && (
        <>
          <Visual asset={project.image} alt={project.title} />
          <p className="project-category">{project.category}</p>
          <p>{project.overview}</p>
          <div className="tags">
            {project.services.map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>
          <Button href="/contact/">Discuss a Similar Project</Button>
        </>
      )}
    </Modal>
  );
}
export function ProjectGrid() {
  const [filter, setFilter] = useState('All Projects'),
    [search, setSearch] = useState(''),
    [selected, setSelected] = useState<Project | null>(null),
    shown = projects.filter(
      (p) =>
        (filter === 'All Projects' || p.filter === filter) &&
        (p.title + ' ' + p.description + ' ' + p.services.join(' '))
          .toLowerCase()
          .includes(search.toLowerCase().trim()),
    );
  return (
    <section className="section portfolio-work" id="projects">
      <div className="container">
        <div className="portfolio-toolbar">
          <div className="filter-list" role="group" aria-label="Filter projects">
            {projectFilters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                aria-pressed={f === filter}
                className={f === filter ? 'active' : ''}
              >
                {f}
              </button>
            ))}
          </div>
          <label className="project-search">
            <span className="sr-only">Search projects</span>
            <Icon name="Search" size={18} />
            <input
              type="search"
              placeholder="Search projects..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </label>
        </div>
        <p className="sr-only" role="status">
          {shown.length} projects shown
        </p>
        <div className="project-grid">
          {shown.map((p) => (
            <ProjectCard key={p.slug} project={p} onSelect={setSelected} />
          ))}
        </div>
        {!shown.length && (
          <div className="empty-state">
            <Icon name="Search" size={35} />
            <h3>No projects found</h3>
            <p>Try another category or search term.</p>
            <button
              className="button button--outline"
              onClick={() => {
                setSearch('');
                setFilter('All Projects');
              }}
            >
              Reset filters
            </button>
          </div>
        )}
      </div>
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
export function ProjectShowcase({
  title = 'Ideas Turned Into Impact',
  slugs,
  compact = false,
  poster = false,
}: {
  title?: string;
  slugs?: string[];
  compact?: boolean;
  poster?: boolean;
}) {
  const [start, setStart] = useState(0),
    [selected, setSelected] = useState<Project | null>(null),
    [posterIndex, setPosterIndex] = useState<number | null>(null);
  const source = slugs
    ? slugs.map((s) => projects.find((p) => p.slug === s)).filter((p): p is Project => !!p)
    : projects;
  const shown = slugs
    ? source
    : Array.from({ length: 4 }, (_, i) => source[(start + i) % source.length]);
  const posters = [
    'Brand & Business',
    'Promotional & Sale',
    'Travel & Lifestyle',
    'Health & Fitness',
    'Awareness & Social',
  ];
  return (
    <section className={'section work-section ' + (compact ? 'work-compact' : '')}>
      <div className="container">
        <div className="section-title-row">
          <SectionHeading
            align="left"
            eyebrow="OUR WORK"
            title={title}
            text="A glimpse of the ideas we’ve brought to life."
          />
          <Button href="/portfolio/" variant="outline">
            View All Projects
          </Button>
        </div>
        {poster ? (
          <div className="poster-grid">
            {posters.map((p, i) => (
              <button key={p} className="poster-card" onClick={() => setPosterIndex(i)}>
                <Visual
                  asset={{ src: '/images/posters-sheet.webp', columns: 5, rows: 1, index: i }}
                  alt={p + ' poster design'}
                />
                <strong>{p}</strong>
                <Icon name="ArrowUpRight" size={18} />
              </button>
            ))}
          </div>
        ) : (
          <div className={'showcase-grid columns-' + shown.length}>
            {shown.map((p) => (
              <ProjectCard key={p.slug} project={p} onSelect={setSelected} />
            ))}
          </div>
        )}
        {!slugs && !poster && (
          <div className="carousel-controls">
            <button
              className="icon-button"
              aria-label="Previous projects"
              onClick={() => setStart((start + source.length - 1) % source.length)}
            >
              <Icon name="ChevronLeft" size={17} />
            </button>
            <div className="dots">
              {source.map((p, i) => (
                <button
                  key={p.slug}
                  aria-label={'Start with ' + p.title}
                  aria-pressed={i === start}
                  className={i === start ? 'active' : ''}
                  onClick={() => setStart(i)}
                />
              ))}
            </div>
            <button
              className="icon-button"
              aria-label="Next projects"
              onClick={() => setStart((start + 1) % source.length)}
            >
              <Icon name="ChevronRight" size={17} />
            </button>
          </div>
        )}
      </div>
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
      <Modal
        open={posterIndex !== null}
        onClose={() => setPosterIndex(null)}
        title={posters[posterIndex || 0] + ' Poster'}
        className="poster-modal"
      >
        {posterIndex !== null && (
          <Visual
            asset={{ src: '/images/posters-sheet.webp', columns: 5, rows: 1, index: posterIndex }}
            alt={posters[posterIndex] + ' poster'}
          />
        )}
        <p>Distinctive visual design created to make your message memorable.</p>
        <Button href="/contact/?service=poster-design">Create Your Poster</Button>
      </Modal>
    </section>
  );
}
