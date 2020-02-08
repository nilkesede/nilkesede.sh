import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Resume from '../../src/pages/resume';
import TagCloud from '../../src/components/tag-cloud';

Enzyme.configure({adapter: new Adapter()});

describe('Resume', () => {
  const resume = mount(<Resume/>);

  it('should have a header with contact info', () => {
    expect(resume.find('header.contact-info').exists()).toBeTruthy();
  });

  it('should have a description section', () => {
    expect(resume.find('section.description').exists()).toBeTruthy();
  });

  it('should have a skills section', () => {
    expect(resume.find('section.skills').exists()).toBeTruthy();
  });

  it('should have a skills section with a tag cloud', () => {
    expect(resume.find(TagCloud).exists()).toBeTruthy();
  });

  it('should have a previous jobs section', () => {
    expect(resume.find('section.experience').exists()).toBeTruthy();
  });
});
