import React from 'react'
import styled from 'styled-components'
import { Col } from './Layout/Framework'

const CourseWrapper = styled.div`
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  padding: 0.5rem 1rem;
`

const CourseHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`

const CourseBody = styled.div`
  display: flex;
  flex-direction: column;
`

const CourseFooter = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`

const CourseItem = ({ node }) => {
  const { date, name, place, teacher, type } = node.frontmatter

  return (
    <Col size="4">
      <CourseWrapper>
        <CourseHeader>
          <strong>
            <small>{name}</small>
          </strong>
          <strong>
            <small>{date}</small>
          </strong>
        </CourseHeader>
        <CourseBody>
          <small>{place}</small>
          <small>{type}</small>
        </CourseBody>
        <CourseFooter>
          <small>Instructor: {teacher}</small>
        </CourseFooter>
      </CourseWrapper>
    </Col>
  )
}

export default CourseItem
