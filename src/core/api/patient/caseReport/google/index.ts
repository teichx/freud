import { ulid } from 'ulid';

import { getPaginate, sendError } from '~/core/api/common';
import { EnumHttpStatus } from '~/core/api/constants';

import {
  ListCaseReportHandler,
  ListCaseReportResume,
  UpsertCaseReportHandler,
} from '../types';
import { GetCaseReportHandler, GetCaseReportProps } from '../types/get';

export const upsert: UpsertCaseReportHandler = async (req, res) => {
  // TODO: Upsert case report
  const id = req.body.caseReport?.id || ulid();
  await new Promise((resolve) => setTimeout(resolve, 750));

  return res.status(EnumHttpStatus.Success).send({
    id,
  });
};

export const list: ListCaseReportHandler = async (req, res) => {
  // TODO: List case report
  const { error, getPagination } = getPaginate({
    req,
  });
  if (error) return sendError({ res, error });

  const caseReports: ListCaseReportResume[] = [];

  return res.status(EnumHttpStatus.Success).send({
    ...getPagination({ totalItems: caseReports.length }),
    patientName: '[LIST] Patient name from API',
    caseReports: caseReports,
  });
};

export const get: GetCaseReportHandler = async (req, res) => {
  // TODO: Get case report by id
  const { caseReportId } = req.query;
  if (!caseReportId) return sendError({ res, error: 'Id not found' });

  const caseReport: GetCaseReportProps = {
    id: ulid(),
    content:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    reportingDate: '2023-01-01',
  };

  return res.status(EnumHttpStatus.Success).send({
    caseReport,
    patientName: '[GET] Patient name from API',
  });
};
