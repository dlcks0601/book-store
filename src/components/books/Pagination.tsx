import React from 'react';
import styled from 'styled-components';
import { Pagination as IPagination } from '../../models/pagination.model';
import { LIMIT } from '../../constants/pagination';
import Button from '../common/Button';
import { useSearchParams } from 'react-router-dom';
import { QUERYSTRING } from '../../constants/querystring';

interface IPaginationProps {
  pagination: IPagination;
}

const Pagination: React.FC<IPaginationProps> = ({
  pagination,
}: IPaginationProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { totalBooks, currentPage } = pagination;

  const pages: number = Math.ceil(totalBooks / LIMIT);

  const handleClickPage = (page: number) => {
    const newSearchParams = new URLSearchParams(searchParams);

    newSearchParams.set(QUERYSTRING.PAGE, page.toString());

    setSearchParams(newSearchParams);
  };

  return (
    <PaginationStyle>
      {pages > 0 && (
        <ol>
          {Array(pages)
            .fill(0)
            .map((_, index) => (
              <li key={index + 1}>
                <Button
                  key={index}
                  size={'small'}
                  scheme={index + 1 == currentPage ? 'primary' : 'normal'}
                  onClick={() => handleClickPage(index + 1)}
                >
                  {index + 1}
                </Button>
              </li>
            ))}
        </ol>
      )}
    </PaginationStyle>
  );
};

const PaginationStyle = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 24px 0;

  ol {
    list-style: none;
    display: flex;
    gap: 10px;
    padding: 0;
    margin: 0;
  }
`;

export default Pagination;
