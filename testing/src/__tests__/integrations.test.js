import React from "react"
import Root from "../Root";
import App from "../components/App";
import {mount} from "enzyme";
import moxios from "moxios"

beforeEach(() => {
  moxios.install();
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [
      {name: 'Fetched #1'}, {name: 'Fetched #2'}
    ]
  })
})

afterEach(() => {
  moxios.uninstall();
})

it('can fetch a list of comments and display them', (done) => {
  // App 컴포넌트 렌더링
  const wrapped = mount(
    <Root>
      <App/>
    </Root>
  )
  // fetchComments 버튼을 찾고 클릭
  wrapped.find('.fetch-comments').simulate('click');

  moxios.wait(() => {
    wrapped.update();
    // comment 리스트를 검사
    expect(wrapped.find('li').length).toEqual(2);

    done();
    wrapped.unmount();
  });
});
