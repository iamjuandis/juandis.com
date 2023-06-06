import Link from 'next/link';
import ButtonLink from '../buttonLink';
import { FormAuth, InputField, ProjectAuthFormContainer } from './styled';

const ProjectAuthForm = ({ onSubmitForm, onChangeInput, passwordValue, errorPassword }: any) => {
  return (
    <ProjectAuthFormContainer>
      <h2>Protected work</h2>
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
            type="password"
            name="password"
            id="password"
            onChange={onChangeInput}
            placeholder="Enter the password"
            value={passwordValue}
            data-lpignore
          />

          <ButtonLink onClick={onSubmitForm} label="Enter password" variant="primary" />
        </div>
        {errorPassword && 'Wrong password'}
      </FormAuth>
    </ProjectAuthFormContainer>
  );
};

export default ProjectAuthForm;
