import React from 'react';
import Link from 'next/link';
import ButtonLink from '../buttonLink';
import {
  FormAuth,
  InputField,
  ProjectAuthFormContainer,
  ProjectFormContent,
  ProjectPreview,
  ProjectPrevImage,
  IconPrev,
} from './styled';
import { Lock } from 'react-feather';

const ProjectAuthForm = ({
  onSubmitForm,
  onChangeInput,
  passwordValue,
  errorPassword,
  projectImage,
  projectTitle,
  projectCompany,
}: any) => {
  return (
    <ProjectAuthFormContainer>
      <ProjectFormContent>
        <h2>Password protected work</h2>
        <p>
          If you have a password, enter it below. Otherwise, request access by sending an email to{' '}
          <Link href="mailto:me@juandis.com" title="me@juandis.com">
            me@juandis.com
          </Link>
          .
        </p>
        <FormAuth onSubmit={onSubmitForm} style={{ marginTop: 100 }}>
          <div className="input-container">
            <InputField
              className={errorPassword && 'input-error'}
              type="password"
              name="password"
              id="password"
              onChange={onChangeInput}
              placeholder="Enter the password"
              value={passwordValue}
              data-lpignore
            />

            <ButtonLink onClick={onSubmitForm} label="Enter" variant="primary" />
          </div>
          {errorPassword && <p className="error-message">Oops! Wrong password. Try again.</p>}
        </FormAuth>
      </ProjectFormContent>
      <ProjectPreview>
        <ProjectPrevImage
          src={projectImage}
          alt={projectTitle}
          quality={50}
          width={400}
          height={400}
        />
        <div className="texts-prev">
          <IconPrev>
            <Lock />
          </IconPrev>
          <h4>{projectTitle}</h4>
          <p>{projectCompany}</p>
        </div>
      </ProjectPreview>
    </ProjectAuthFormContainer>
  );
};

export default ProjectAuthForm;
